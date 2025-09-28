"use client"
import { Button, Card, Label, TextInput } from "flowbite-react"

export const RegisterForm = () => {

  return (
    <div className="max-w-md mx-auto mt-8">
      <Card className="w-full">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">Registro de Usuario</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">Crea tu cuenta para comenzar</p>
        </div>

        <form className="space-y-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name">Nombre completo</Label>
            </div>
            <TextInput
              id="name"
              name="name"
              type="text"
              placeholder="Ingresa tu nombre completo"
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="email">Correo electrónico</Label>
            </div>
            <TextInput
              id="email"
              name="email"
              type="email"
              placeholder="ejemplo@correo.com"
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password">Contraseña</Label>
            </div>
            <TextInput
              id="password"
              name="password"
              type="password"
              placeholder="tu password aqui"
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat_password">Repetir Contraseña</Label>
            </div>
            <TextInput
              id="repeat_password"
              name="repeat_password"
              type="password"
              placeholder="repite tu password aqui"
            />
          </div>

          <Button
            type="submit"
            className="w-full"
          >
            Crear Cuenta
          </Button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            ¿Ya tienes una cuenta?{" "}
            <a href="/" className="text-primary hover:underline font-medium">
              Inicia sesión aquí
            </a>
          </p>
        </div>
      </Card>
    </div>
  )
}
