import React, { useState } from 'react'
import AccordionItems from './AccordionItems'
import data from './data'

const App = () => {
  const [accordion, setAccordion] = useState(data)

  return (
    <main>
      <div className='container'>
        <h3>Accordion</h3>
        <section className='info'>
          {accordion.map((acc) => (
            <AccordionItems key={acc.id} {...acc} />
          ))}
        </section>
      </div>
    </main>
  )
}

export default App