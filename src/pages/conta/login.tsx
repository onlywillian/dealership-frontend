import { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Input from '@/components/Input'
import Button from '@/components/Button'
import logo from '../../../public/assets/app-logos/bc-logo-light.svg'


export default function Login() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleButtonClick = async () => {
        const response = await fetch("http://localhost:8000/users/find", {
            method: "POST",
            body: JSON.stringify({ email: email, password: pass }),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();

        return console.log(data)
    }

    return (
        <>
            <Head>
                <title>Borges Car - Conta</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='h-screen w-screen bg-aqua-light flex items-center justify-center'>
                <div className='w-5/6 h-5/6 bg-white rounded-3xl flex flex-col justify-around lg:w-2/6'>
                    <Image className='h-40 w-40 mt-2 self-center' src={logo} alt='Borges Car Logo'/>

                    <div className='flex flex-col px-10'>
                        <Input 
                            type='email' 
                            label='E-MAIL' 
                            id='email' 
                            light={false} 
                            handleInput={setEmail}
                        />
                        <Input 
                            type='password' 
                            label='SENHA' 
                            id='pass' 
                            light={false} 
                            handleInput={setPass}
                        />

                        <div className='flex justify-evenly lg:justify-around'>
                            <div className='flex'>
                                <p className='font-extrabold font text-gray-600'>LEMBRE-SE DE MIM </p>
                                <input type="checkbox" className='ml-1' />
                            </div>
                            <p className='font-extrabold text-gray-600'>ESQUECEU SUA SENHA?</p>
                        </div>
                    </div>


                    <div className='flex flex-col gap-4'>
                        <Button handleButtonClick={handleButtonClick}>ENTRE NA SUA CONTA AGORA</Button>
                        <Link href='registrar' className='self-center'>
                            <Button>CADASTRE-SE AQUI</Button>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}