"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Sparkles, Moon, Sun, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPersonRifle } from "@fortawesome/free-solid-svg-icons"

export default function MagicChatBubble() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    scrollToBottom()
  }, [messages, isLoading])

  useEffect(() => {
    // Focus input when chat opens
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 300)
    }
  }, [isOpen])

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]")
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight
      }
    }
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { text: input, isUser: true }])
    setIsLoading(true)
    setInput("")

    // Simulate AI response after a delay
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: [{ role: "user", content: input }] }),
      })

      if (!response.ok) {
        throw new Error("Failed to fetch API")
      }

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let aiResponse = ""

      setMessages((prev) => [...prev, { text: "", isUser: false }])

      while (true) {
        setIsLoading(false)
        const { done, value } = (await reader?.read()) || { done: true, value: undefined }
        if (done) break

        const chunk = decoder.decode(value, { stream: true })
        aiResponse += chunk

        setMessages((prev) =>
          prev.map((msg, index) => (index === prev.length - 1 ? { text: aiResponse, isUser: false } : msg)),
        )
      }
    } catch (error: any) {
      console.log(error)
      setMessages((prev) => [
        ...prev,
        {
          text: `Error: ${error.message}. Please try again.`,
          isUser: false,
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("fixed bottom-6 right-6 z-50 flex flex-col justify-center items-end", isDarkMode && "dark")}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className="mb-4"
          >
            <Card className="w-[350px] sm:w-[400px] border-none shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.7)] backdrop-blur-lg bg-white/90 dark:bg-zinc-900/90 overflow-hidden flex flex-col h-[500px]">
              <CardHeader className="p-4 bg-gradient-to-r from-primary/90 to-secondary/90 border-b border-white/10 shrink-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white rounded-full blur-sm opacity-30 animate-pulse"></div>
                      <Sparkles size={18} className="text-white relative" />
                    </div>
                    <CardTitle className="text-white font-medium tracking-tight text-base">Manara Assistant</CardTitle>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            className="h-8 w-8 text-white/80 hover:text-white hover:bg-white/10"
                          >
                            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                          <p className="text-white">Toggle theme</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleChat}
                            className="h-8 w-8 text-white/80 hover:text-white hover:bg-white/10"
                          >
                            <X size={16} />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                          <p className="text-white">Close chat</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </CardHeader>

              <ScrollArea className="flex-grow overflow-y-auto" ref={scrollAreaRef}>
                <CardContent className="p-4 space-y-4 h-full">
                  {messages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-[300px] text-zinc-500 dark:text-zinc-400 space-y-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 dark:bg-secondary/10 rounded-full blur-xl"></div>
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center relative">
                          <MessageCircle size={28} className="text-white dark:text-gray-400" />
                        </div>
                      </div>
                      <p className="text-center max-w-[240px] text-sm">
                        Ask me anything and I'll do my best to help you!
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {messages.map((msg, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                            delay: 0.05 * (index % 3),
                          }}
                          className={`flex ${msg.isUser ? "justify-end" : "justify-start"} group`}
                        >
                          {!msg.isUser && (
                            <div className="mr-2 mt-0.5">
                              <Avatar className="h-8 w-8 border-2 border-indigo-200  bg-gradient-to-br from-primary to-secondary">
                                <Sparkles size={14} className="text-white" />
                              </Avatar>
                            </div>
                          )}

                          <div
                            className={cn(
                              "max-w-[85%] p-3 rounded-2xl shadow-sm relative",
                              msg.isUser
                                ? "bg-gradient-to-r from-primary to-secondary  text-white rounded-tr-none"
                                : "bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 rounded-tl-none",
                            )}
                          >
                            {msg.isUser && (
                              <div className="absolute -right-1 -top-1 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            )}
                            <div className="whitespace-pre-wrap text-sm">
                              <span>{msg.text}</span>
                            </div>
                          </div>

                          {msg.isUser && (
                            <div className="ml-2 mt-0.5 flex justify-center items-center">
                              <Avatar className="h-8 w-8 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 flex justify-center items-center">
                                <User />
                              </Avatar>
                            </div>
                          )}
                        </motion.div>
                      ))}
                      {isLoading && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex justify-start"
                        >
                          <div className="mr-2 mt-0.5">
                            <Avatar className="h-8 w-8 border-2 border-indigo-200 dark:border-indigo-900 bg-gradient-to-br from-primary to-secondary">
                              <Sparkles size={14} className="text-white" />
                            </Avatar>
                          </div>
                          <div className="bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center space-x-2">
                            <div className="flex space-x-1">
                              <span
                                className="w-2 h-2 rounded-full bg-secondary  animate-bounce"
                                style={{ animationDelay: "0ms" }}
                              ></span>
                              <span
                                className="w-2 h-2 rounded-full bg-secondary  animate-bounce"
                                style={{ animationDelay: "150ms" }}
                              ></span>
                              <span
                                className="w-2 h-2 rounded-full bg-secondary  animate-bounce"
                                style={{ animationDelay: "300ms" }}
                              ></span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>
                  )}
                </CardContent>
              </ScrollArea>

              <CardFooter className="p-3 border-t border-zinc-100 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm shrink-0">
                <form onSubmit={handleSubmit} className="flex w-full gap-2">
                  <div className="relative flex-grow">
                    <Input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type your message..."
                      className="pr-10 bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 focus-visible:ring-indigo-500 dark:focus-visible:ring-indigo-400 h-10"
                    />
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          type="submit"
                          size="icon"
                          disabled={!input.trim() || isLoading}
                          className={cn(
                            "h-10 w-10 rounded-full transition-all duration-200",
                            input.trim() && !isLoading
                              ? "bg-gradient-to-r from-secondary to-secondary/30 text-white shadow-md hover:shadow-lg hover:bg-secondary"
                              : "bg-zinc-200 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-600",
                          )}
                        >
                          <Send size={16} className={input.trim() && !isLoading ? "animate-pulse" : ""} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p className="text-white">Send message</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating chat button with magic effects */}
      <div className="relative">
        {/* Glow effect */}
        <div
          className={cn(
            "absolute inset-0 rounded-full blur-xl transition-opacity duration-500",
            isOpen
              ? "bg-indigo-500/20 dark:bg-indigo-500/30 opacity-100"
              : "bg-indigo-500/30 dark:bg-indigo-500/40 opacity-80",
          )}
        ></div>

        {/* Floating particles */}
        {!isOpen && (
          <>
            <motion.div
              className="absolute w-2 h-2 rounded-full bg-indigo-300 dark:bg-indigo-400"
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                x: [0, -15, -10],
                y: [0, -20, -30],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                times: [0, 0.5, 1],
                delay: 0.2,
              }}
            />
            <motion.div
              className="absolute w-1.5 h-1.5 rounded-full bg-violet-300 dark:bg-violet-400"
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                x: [0, 10, 15],
                y: [0, -15, -25],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2.3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                times: [0, 0.5, 1],
                delay: 0.5,
              }}
            />
            <motion.div
              className="absolute w-1 h-1 rounded-full bg-pink-300 dark:bg-pink-400"
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                x: [0, -8, -12],
                y: [0, -10, -15],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                times: [0, 0.5, 1],
                delay: 0.8,
              }}
            />
          </>
        )}

        <Button
          onClick={toggleChat}
          size="icon"
          className={` ${isOpen ? "hidden" : ""}  ${cn(
            "h-14 w-14 text-white rounded-full shadow-lg relative z-10 transition-all duration-300",
            "bg-gradient-to-r from-primary to-secondary ",
            "hover:shadow-indigo-500/25 dark:hover:shadow-indigo-700/20 hover:shadow-xl",
          )} `}
          style={{
            boxShadow: isOpen ? "0 0 0 rgba(99, 102, 241, 0)" : "0 0 20px rgba(var(--secondary-rgb), 0.5)",
          }}
        >
          <motion.div
            animate={{
              rotate: isOpen ? 45 : 0,
              scale: isOpen ? 1 : [1, 1.05, 1],
            }}
            transition={{
              rotate: { type: "spring", stiffness: 260, damping: 20 },
              scale: {
                duration: 2,
                repeat: isOpen ? 0 : Number.POSITIVE_INFINITY,
                repeatType: "loop",
              },
            }}
          >
            {isOpen ? <X size={20} /> : <MessageCircle size={50} />}
          </motion.div>
        </Button>
      </div>
    </div>
  )
}

