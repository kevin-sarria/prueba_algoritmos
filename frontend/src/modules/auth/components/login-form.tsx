"use client"

import { Button, Card, Label, TextInput } from "flowbite-react"
import type React from "react"

import { useState } from "react"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de autenticación
    console.log("Login attempt:", { email, password })
  }

  return (
    <Card className="w-full max-w-md">
        <h2 className="text-2xl font-bold">Iniciar Sesión</h2>
        <p>Ingresa tu email y contraseña para acceder</p>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="space-y-2">
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
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <TextInput
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex flex-col space-y-4 mt-4">
          <Button type="submit" className="w-full">
            Iniciar Sesión
          </Button>
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              ¿No tienes cuenta?{" "}
              <a href="/register" className="text-primary hover:underline font-medium">
                Crear cuenta
              </a>
            </p>
            <a href="/forgot-password" className="text-sm text-muted-foreground hover:text-primary hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>
      </form>
    </Card>
  )
}
