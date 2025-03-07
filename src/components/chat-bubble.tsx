"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollToBottom()
  }, [messages, isLoading])
  // Auto-scroll to bottom of messages
    const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      const { scrollHeight, clientHeight } = messagesContainerRef.current
      messagesContainerRef.current.scrollTop = scrollHeight - clientHeight
    }
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    setMessages([...messages, { text: input, isUser: true }])
    setIsLoading(true)

    // Simulate AI response after a delay
    try{
        setInput("")
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: { 'Content-Type': "application/json"},
            body: JSON.stringify({ message: [{ role: "user", content: input }] })
        })

        if(!response.ok){
            throw new Error("Faild To Fetch Api")
        }
        const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        let aiResponse = "";

        setMessages((prev) => [...prev, { text: "", isUser: false }]);


        while (true) {
          setIsLoading(false)
          const { done, value } = await reader?.read()
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          aiResponse += chunk;
          setMessages((prev) =>
            prev.map((msg, index) =>
              index === prev.length - 1 ? { text: aiResponse, isUser: false } : msg
            )
          );
        }
    }catch(error: any){
        console.log(error)
        setMessages((prev) => [
            ...prev,
            {
            text: `Error ${error.message}. Please Try again`,
            isUser: false,
            },
        ])
    }finally{
        setIsLoading(false)
    }

  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col justify-center items-center">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="bg-white rounded-2xl shadow-2xl mb-4 w-80 sm:w-96 overflow-hidden border border-gray-200"
          >
            {/* Chat header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white flex justify-between items-center">
              <h3 className="font-medium">AI Chatbot</h3>
              <button onClick={toggleChat} className="text-white hover:bg-white/20 rounded-full p-1 transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages container */}
            <div className="h-80 overflow-y-auto z-999 p-4 bg-gray-50 " ref={messagesContainerRef}>
              {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full text-gray-500">
                  <p>Send a message to get started!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * (index % 3) }}
                      className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl ${
                          msg.isUser
                            ? "bg-primary/70 text-white rounded-tr-none"
                            : "bg-white border border-gray-200 text-gray-700 rounded-tl-none"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none flex items-center space-x-2">
                        <Loader2 size={16} className="animate-spin text-blue-500" />
                        <span className="text-gray-500">Typing...</span>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* Input area */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className={`ml-2 p-2 rounded-full ${
                  input.trim() && !isLoading
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                } transition-colors`}
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat bubble button */}
      <motion.button
        onClick={toggleChat}
        className="bg-gradient-to-r from-primary to-secondary text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow self-end"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: isOpen ? 45 : 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.2,
        }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  )
}

