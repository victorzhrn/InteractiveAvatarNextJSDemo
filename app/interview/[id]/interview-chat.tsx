'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";

interface Message {
  id: string;
  content: string;
  role: 'interviewer' | 'user';
  timestamp: Date;
}

interface InterviewChatProps {
  interviewerId: string;
}

export default function InterviewChat({ interviewerId }: InterviewChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your mock interviewer for today. Let's start with a common question: Could you tell me about yourself and your background in software development?",
      role: 'interviewer',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  async function handleSendMessage() {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate interviewer response
    // In a real implementation, this would call your AI endpoint
    setTimeout(() => {
      const interviewerMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "That's interesting! Let me ask you a technical question now. Could you explain how you would design a scalable web application, considering aspects like load balancing and caching?",
        role: 'interviewer',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, interviewerMessage]);
      setIsTyping(false);
    }, 2000);
  }

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div className={`flex gap-3 max-w-[80%] ${
                message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}>
                <Avatar className="w-8 h-8">
                  {message.role === 'interviewer' ? (
                    <AvatarImage src="/avatars/interviewer-1.jpg" alt="Interviewer" />
                  ) : (
                    <AvatarImage src="/avatars/user.jpg" alt="User" />
                  )}
                  <AvatarFallback>
                    {message.role === 'interviewer' ? 'I' : 'U'}
                  </AvatarFallback>
                </Avatar>
                <Card className={`p-3 ${
                  message.role === 'user' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted'
                }`}>
                  <p className="text-sm">{message.content}</p>
                </Card>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <Card className="p-3 bg-muted">
                <p className="text-sm">Typing...</p>
              </Card>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Textarea
            value={input}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
            placeholder="Type your response..."
            className="flex-1"
            onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <Button onClick={handleSendMessage}>Send</Button>
        </div>
      </div>
    </div>
  );
} 