"use client"

import { Button, Card, Label, TextInput } from "flowbite-react"
import type React from "react"

import { useState } from "react"

export const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Recover password attempt:", { email })
  }

  return (
    <Card className="w-full max-w-md">
      <h2 className="text-2xl font-bold">Recuperar Contraseña</h2>
      <p>Ingresa tu email y te enviaremos instrucciones para recuperar tu contraseña</p>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="email">Email</Label>
            <TextInput
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex flex-col space-y-4 mt-4">
          <Button type="submit" className="w-full">
            Recuperar Contraseña
          </Button>
          <div className="text-center space-y-2">
            <a
              href="/"
              className="text-sm text-muted-foreground hover:text-primary hover:underline"
            >
              Volver al inicio de sesión
            </a>
          </div>
        </div>
      </form>
    </Card>
  )
}
