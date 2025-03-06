"use client"

import { useState, useEffect, useRef } from "react"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, Calendar, Droplets, X, Minimize, Maximize } from "lucide-react"
import { getTranslation } from "@/lib/i18n"
import { cn } from "@/lib/utils"

type ChatWidgetProps = {
  userId: string
  language?: string
}

export function ChatWidget({ userId, language = "en" }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [translations, setTranslations] = useState<any>({})
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    body: {
      userId,
      language,
    },
    initialMessages: [],
  })

  useEffect(() => {
    const loadTranslations = async () => {
      const t = await getTranslation(language)
      setTranslations(t)
    }

    loadTranslations()
  }, [language])

  useEffect(() => {
    if (messagesEndRef.current && isOpen && !isMinimized) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [isOpen, isMinimized])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    setIsMinimized(false)
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  if (!translations.chatTitle) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card
          className={cn(
            "w-80 md:w-96 shadow-lg transition-all duration-300 ease-in-out",
            isMinimized ? "h-16" : "h-[500px]",
          )}
        >
          <CardHeader className="p-3 border-b flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">{translations.chatTitle}</CardTitle>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" onClick={toggleMinimize} className="h-6 w-6">
                {isMinimized ? <Maximize className="h-4 w-4" /> : <Minimize className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleChat} className="h-6 w-6">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          {!isMinimized && (
            <>
              <Tabs defaultValue="chat" className="flex flex-col h-[calc(100%-64px)]">
                <TabsList className="grid grid-cols-3 mx-3 mt-2">
                  <TabsTrigger value="chat">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    <span className="sr-only md:not-sr-only md:inline-block">{translations.customerSupportLabel}</span>
                  </TabsTrigger>
                  <TabsTrigger value="water">
                    <Droplets className="h-4 w-4 mr-2" />
                    <span className="sr-only md:not-sr-only md:inline-block">{translations.waterManagementLabel}</span>
                  </TabsTrigger>
                  <TabsTrigger value="appointments">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="sr-only md:not-sr-only md:inline-block">{translations.appointmentsLabel}</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="chat" className="flex-1 overflow-hidden flex flex-col">
                  <CardContent className="flex-1 overflow-y-auto p-3 space-y-4">
                    {messages.length === 0 ? (
                      <div className="text-center text-muted-foreground py-6">
                        Ask me anything about water management or schedule an appointment!
                      </div>
                    ) : (
                      messages.map((message) => (
                        <div
                          key={message.id}
                          className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
                        >
                          <div
                            className={cn(
                              "rounded-lg px-3 py-2 max-w-[80%] break-words",
                              message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted",
                            )}
                          >
                            {message.content}
                          </div>
                        </div>
                      ))
                    )}
                    <div ref={messagesEndRef} />
                  </CardContent>

                  <CardFooter className="p-3 pt-0">
                    <form onSubmit={handleSubmit} className="flex w-full space-x-2">
                      <Input
                        placeholder={translations.chatPlaceholder}
                        value={input}
                        onChange={handleInputChange}
                        className="flex-1"
                      />
                      <Button type="submit" size="sm" disabled={isLoading}>
                        {translations.sendButtonLabel}
                      </Button>
                    </form>
                  </CardFooter>
                </TabsContent>

                <TabsContent value="water" className="flex-1 overflow-auto p-4">
                  <div className="space-y-4">
                    <h3 className="font-medium">Water Usage Dashboard</h3>
                    <p className="text-sm text-muted-foreground">
                      Ask the chatbot about your water usage or conservation tips.
                    </p>
                    <div className="border rounded-md p-3">
                      <h4 className="text-sm font-medium mb-2">Recent Usage</h4>
                      <div className="h-32 bg-muted rounded-md flex items-center justify-center">
                        Water usage chart placeholder
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="appointments" className="flex-1 overflow-auto p-4">
                  <div className="space-y-4">
                    <h3 className="font-medium">Schedule an Appointment</h3>
                    <p className="text-sm text-muted-foreground">
                      Ask the chatbot to schedule a maintenance visit or consultation.
                    </p>
                    <div className="border rounded-md p-3">
                      <h4 className="text-sm font-medium mb-2">Available Services</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Water System Inspection</li>
                        <li>• Leak Detection</li>
                        <li>• Conservation Consultation</li>
                        <li>• Meter Reading</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </>
          )}
        </Card>
      ) : (
        <Button onClick={toggleChat} size="icon" className="h-12 w-12 rounded-full shadow-lg">
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}

