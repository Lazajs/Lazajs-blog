import {useState} from 'react'
import style from 'styles/OpinionForm.style'
import  H from 'components/Higlight'
import Link from 'next/link'
import Spinner from 'components/Spinner'
import { useRouter } from 'next/router'

export function OpinionForm () {
  const [isLoading, setIsLoading] = useState(false)
  const [fields, setFields] = useState({name: '', content: ''})
  const [success, setSuccess] = useState<boolean | null>(null)
  const router = useRouter()

  const isContentSubmittable = (fields.content.length > 10) && (fields.content.length <= 200)

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    
    if (isContentSubmittable) {
      setIsLoading(true)
      fetch('/api/opinions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(fields)
      })
      .then(res => {
        res.ok ? setSuccess(true) : setSuccess(false)
      })
      .catch(err => {
        setSuccess(false)
      })
      .finally(()=> {
        setFields({name: '', content: ''})
        setIsLoading(false)
      })
    }
  }
  
  const handleChange = ({target} : {target: HTMLInputElement | HTMLTextAreaElement}) => {
    if (target.name === 'content' && target.value.length > 200) return
    
    setFields({
      ...fields,
      [target.name]: target.value
    })
  }

  if (success) return (
    <section className='submitted'>
      <h2><H>¡G</H>rac<H>ias</H> por tu opinión! 😊</h2>
      <button onClick={()=> router.push('/lazaro')} className='link'>Volver al portfolio</button>
      <style jsx>{style}</style>
    </section>
  )

  if (success === false) return (
    <section className='submitted'>
      <h2><H>¡Algo</H> sa<H>lio</H> mal! 😡</h2>
      <button onClick={()=> location.reload()} className='link'>Volver a intentarlo</button>
      <style jsx>{style}</style>
    </section>
  )

  return (
    <section className='container'>
      <h2><H>¡Opi</H>na sob<H>re m</H>í!</h2>
      
      {
      isLoading ? <Spinner /> : (
        <form onSubmit={handleSubmit}>
          <span className='field'>
            <label htmlFor="name">Tu nombre (opcional)</label>
            <input type="text" id='name' value={fields.name} onChange={handleChange} name='name' placeholder='Nombre' />
          </span>
          <span className='field content'>
            <label htmlFor="content">Tu opinión (¡Sé sincero!)</label>
            <textarea placeholder='Opinión' name="content" id="content" value={fields.content} onChange={handleChange} cols={30} rows={10}></textarea>
            <small className={`${!isContentSubmittable ? 'textoverflow' : ''}`}>{fields.content.length}/200</small>
          </span>
          <button disabled={!isContentSubmittable}>Enviar opinión</button>
        </form>
        )
      }
      <style jsx>{style}</style>
    </section>
  )
}