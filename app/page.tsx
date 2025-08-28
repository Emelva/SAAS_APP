import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionsList'
import Cta from '@/components/Cta'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard 
          id= '123'
          name='Neura the Brainy Explorer'
          topic="Neural network of the brain"
          subject="Science"
          duration={45}
          color="#ffda6e"/>
        <CompanionCard 
          id= '456'
          name='Countsy the Number Wizard'
          topic="Derivatives  & Integrals"
          subject="Maths"
          duration={30}
          color="#e5d0ff"/>
        <CompanionCard 
          id= '789'
          name='Verba the Vocabulary Builder'
          topic="English Literature"
          subject="Language"
          duration={32}
          color="#BDE7FF"/>
      </section>

      <section className='home-section'>
        <CompanionList 
        title="Recently completed sessions"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"/>
        <Cta />
      </section>
    </main>
  )
}

export default Page