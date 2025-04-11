'use client';

import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    pergunta: "Vale o investimento? Não seria mais fácil usar modelos gratuitos?",
    resposta: "Olha, modelos gratuitos podem até parecer uma solução, mas muitas vezes estão desatualizados ou não são confiáveis. Com o Pluma Docs, você investe em um material seguro e revisado. É um pequeno valor por muita paz de espírito e tempo livre!"
  },
  {
    pergunta: "Por que eu deveria escolher o Pluma Docs e não outro produto?",
    resposta: "Porque desenvolvemos modelos que, além de seguros e padronizados, trazem profissionalismo e diferencial pra sua clínica com um visual único e totalmente personalizável. Reforce a sua marca e se destaque com documentos que transmitem sua personalidade."
  },
  {
    pergunta: "Como vou receber os documentos?",
    resposta: "Assim que o pagamento for confirmado, você vai receber um email com instruções de acesso à nossa Área de Membros, onde vai encontrar todos os modelos baixáveis + o Guia bônus da assinatura digital."
  }
]

export default function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600">
            Tire suas dúvidas sobre o Pluma Docs
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Disclosure key={index} as="div" className="mb-4">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left text-lg font-medium text-gray-900 bg-[#FDF8F9] rounded-lg hover:bg-[#F5EEF0] focus:outline-none focus-visible:ring focus-visible:ring-[#C4A484] focus-visible:ring-opacity-50">
                    <span>{faq.pergunta}</span>
                    <ChevronDownIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-[#C4A484]`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 py-4 text-base text-gray-600">
                    {faq.resposta}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  )
} 