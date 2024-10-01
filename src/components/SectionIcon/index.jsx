import Image from "next/image";

const iconItems = [
  {
    title: "Alavancagem Comercial",
    imageUrl: "/icons/004-3.png",
    description:
      "Resultados comerciais agressivos através de reuniões, prospecções, fechamento de novos contratos e mapeamento de mercado.",
  },
  {
    title: `Captação de Recursos`,
    imageUrl: "/icons/captacao2.png",
    description:
      "Preparação para investimento, roadshow com investidores e consolidação de aporte de capital.",
  },
  {
    title: "Desenvolvimento de Negócio",
    imageUrl: "/icons/006-2.png",
    description:
      "Gestão completa. Suporte em jurídico, t.i., tributário, pessoas, mercado e principalmente, resultado.",
  },
  {
    title: "Intermediações",
    imageUrl: "/icons/inter3.png",
    description:
      "Intermediação com total transparência e profissionalismo, facilitando negociações e garantindo os melhores resultados para todas as partes.",
  },
  {
    title: "Compra e venda de negócios",
    imageUrl: "/icons/008-4.png",
    description:
      "Consultoria na compra e venda de empresas, garantindo as melhores condições em todas as etapas.",
  },
  {
    title: "Corporate Inovation",
    imageUrl: "/icons/idea.png",
    description: "Consultoria de inovação para dentro das empresas.",
  },
  {
    title: "Gestão de Projetos",
    imageUrl: "/icons/002-7.png",
    description:
      "Gestão completa de projetos, do planejamento à execução, focando em eficiência, prazos e metas.",
  },
  {
    title: "Real Estate",
    imageUrl: "/icons/real-estate.png",
    description: "Desenvolvimento de negócios imobiliários, consultoria para aquisição e venda de imóveis.",
  },
];

const SectionIcon = () => {
  return (
    <>
      <div className="relative bg-darkcolor py-4 lg:py-12 lg:py-10 px-6 lg:px-8" id="o-que-fazemos">
        <div className="container max-w-7xl mx-auto">
          <h3 className="pt-20 text-center max-w-3xl mx-auto text-2xl text-white tracking-tight sm:text-3xl">
            Na Startcity você encontra tudo o que precisa para o futuro{" "}
            <span className="font-semibold text-maincolor">
              do seu negócio
            </span>
          </h3>
          <div className="mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white ">
            {iconItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-start items-center mb-10"
                data-aos="zoom-in"
                data-aos-delay={`${index * 100 + 500}`}
                data-aos-duration="1000"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={110}
                  height={110}
                  className="transition duration-2000 ease-out transform hover:scale-110"
                />
                <h3 className="text-lg leading-tight text-center uppercase mt-8 px-5">
                  {item.title}
                </h3>
                <p className="text-center font-light mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex mx-auto mt-6 justify-center pb-20">
              {/* <button
                type="submit"
                className="uppercase inline-flex items-center justify-center max-w-2xl h-12 px-6 font-medium tracking-wide text-maincolor border-solid border-2 border-maincolor duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-maincolor hover:border-maincolor hover:text-white focus:shadow-outline focus:outline-none transition-colors"
              >
                Quero saber mais
              </button> */}
            </div>
        </div>
      </div>
    </>
  );
};

export default SectionIcon;
