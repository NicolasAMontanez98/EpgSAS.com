import React, { useState } from 'react'
import {
  Input,
  Button,
  Switch,
  Typography,
} from '@material-tailwind/react'

export const Login: React.FC<any> = () => {
  const [ showPassword, setShowPassword] = useState<boolean>(false)
  return (
    <div className='pt-32 w-screen flex justify-center items-center'>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input
            variant='static'
            className='text-white'
            color='red'
            size="lg"
            label="Correo"
          />
          <Input
            variant='static'
            className='text-white'
            color='red'
            type={showPassword ? 'text' : 'password'}
            size="lg" label="Contraseña"
          />
          <Switch
            label={
              <Typography variant="small" color="white" className="font-normal">Mostrar contraseña</Typography>
            }
            className='text-white bg-slate-200'
            color='red'
            id='show_password'
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
        </div>
        <Button className="mt-6" fullWidth color='red'>
          Ingresar
        </Button>
      </form>
    </div>
  )
}
