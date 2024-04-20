import React from "react";

export const StartPartner = () => {
  return (
    <div className="bg-graycolor flex flex-col mx-auto items-center justify-center py-6 lg:py-20 px-4">
      <h3 className="text-center max-w-3xl mx-auto text-3xl text-darkcolor tracking-tight sm:text-4xl">
        Quer iniciar uma parceria com a Starticy{" "}
        <span className="font-semibold text-maincolor">imediatamente?</span>
      </h3>
      <p className="mt-8">
        Escolha abaixo o perfil que você se encaixa melhor e saiba mais
        informações de como ser um parceiro da Startcity!
      </p>

      <div className="flex flex-col md:flex-row mt-8">
        <div className="bg-darkcolor flex-1 p-16 w-96 lg:rounded-l-xl">
            <h3 className="text-white py-4 text-xl font-medium uppercase">Cadastrar projeto</h3>
            <p className="text-graycolor mb-8">Clique no link abaixo para cadastrar seu projeto na Starcity</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScB23oWC1rZzAvyTFhJ-cXHdb1u4dMkr8nVX8dL3jxsh2MjvA/viewform" target="_blank" className="uppercase text-sm text-white">Cadastrar-se agora</a>
        </div>
        <div className="bg-maincolor2 flex-1 p-16 w-96">
        <h3 className="text-white py-4 text-xl font-medium uppercase">Seja um investidor</h3>
        <p className="text-graycolor mb-8">Clique no link abaixo para cadastrar-se como um investidor</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfOalbdloFGBfX4hM-SU5NQA8YWMTthCDS5DjrXsHmwdJx_EQ/viewform" target="_blank" className="uppercase text-sm text-white">Cadastrar-se agora</a>
        </div>
        <div className="bg-maincolor flex-1 p-16 w-96 lg:rounded-r-xl">
        <h3 className="text-white py-4 text-xl font-medium uppercase">Seja um parceiro</h3>
        <p className="text-graycolor mb-8">Clique no link abaixo para cadastrar-se como parceiro</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdrF3s8IShSjWOr2nPtij5266h-PznsQ2OUrUcgeu_NAgAiZw/viewform" target="_blank" className="uppercase text-sm text-white">Cadastrar-se agora</a>
        </div>
      </div>
    </div>
  );
};
