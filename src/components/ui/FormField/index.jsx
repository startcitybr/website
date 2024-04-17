'use client';

import { FiCopy, FiEdit3 } from "react-icons/fi";
import { IMaskInput } from "react-imask";

// Definições base para estilos e cores
const styles = {
  full: "flex-1 min-w-0 block w-full px-3 py-2 rounded-md sm:text-sm ",
};

const colors = {
  primary:
    "bg-transparent border-b border-maincolor2  text-textlight focus:outline-none text-graycolor",
  secondary: "border-gray-300",
  transparent:
    "bg-transparent border-none focus:ring-maincolor focus:border-maincolor",
};

export default function FormField({
  type = "text",
  styleType = "full",
  label,
  fieldname,
  register,
  colorType = "primary",
  defaultValue,
  name,
  placeholder,
  id,
  onClick,
  onChange,
  value,
  icon,
  iconPosition = "right",
  mask,
  copyEnabled = false,
  ...props
}) {
  // Ajuste para lidar com a mudança de input quando usando o IMaskInput
  const handleIMaskChange = (value) => {
    if (typeof onChange === 'function') {
      onChange({ target: { name: name, value } });
    } else {
      console.warn('onChange prop is not a function');
    }
  };

  const copyToClipboard = (inputName) => {
    const input = document.getElementsByName(inputName)[0]; // Busca o input pelo nome
    input.select(); // Seleciona o texto do input
    document.execCommand("copy"); // Executa o comando de copiar
  };

  const maskConfigurations = {
    currency: {
      mask: "num",
      blocks: {
        num: {
          mask: Number,
          thousandsSeparator: ".",
          radix: ",",
          scale: 0, // Duas casas decimais
          signed: false,
          normalizeZeros: true,
          padFractionalZeros: true,
        },
      },
    },
    date: {
      mask: Date,
      pattern: "d{/}`m{/}`Y", // Certifique-se de que o padrão corresponde ao desejado, aqui parece haver um erro com as crases (`) ao invés de barras (/).
      blocks: {
        d: { mask: IMask.MaskedRange, from: 1, to: 31, maxLength: 2 },
        m: { mask: IMask.MaskedRange, from: 1, to: 12, maxLength: 2 },
        Y: { mask: IMask.MaskedRange, from: 1900, to: 2999, maxLength: 4 },
      },
      format: function (date) {
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0"); // getMonth() retorna mês de 0 a 11
        const year = date.getFullYear();
        return `${day}/${month}/${year}`; // Retorna a data formatada como DD/MM/YYYY
      },
      parse: function (str) {
        const [day, month, year] = str.split("/"); // Divide a string de data no formato DD/MM/YYYY
        return new Date(year, month - 1, day); // Cria um objeto Date (mês é 0-indexed)
      },
      autofix: true,
    },

    expireDate: {
      mask: "MM/YY",
      blocks: {
        MM: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 12,
        },
        YY: {
          mask: IMask.MaskedRange,
          from: 0,
          to: 99,
        },
      },
    },

    cvc: {
      mask: "0000",
      maxLength: 4, // Opcional: depende de como você deseja restringir a entrada
    },
    
    cpf: {
      mask: "000.000.000-00",
    },
    cartaocredito: {
      mask: "0000 0000 0000 0000",
    },
    cnpj: {
      mask: "00.000.000/0000-00",
    },
    cep: {
      mask: "00000-000",
    },
    mobile: {
      mask: "(00) 00000-0000",
    },
    // Adicione outras máscaras conforme necessário
    metragem: {
      mask: "{num}",
      blocks: {
        num: {
          mask: Number,
          thousandsSeparator: "", // Ou considere remover se não necessário
          radix: ".",
          scale: 2, // Duas casas decimais
          signed: false, // Não permite negativos
          normalizeZeros: true, // Normaliza os zeros
          padFractionalZeros: true, // Completa com zeros fracionários
        },
      },
      lazy: false, // Para garantir que a máscara seja aplicada desde o início
    },
  };

  // Seleciona a configuração de máscara com base na prop mask
  const maskConfig = mask ? maskConfigurations[mask] : null;

  // Combinando as classes de estilo e cor com base nas propriedades
  const combinedStyles = `${styles[styleType]} ${colors[colorType]}`;
  const inputClasses = `flex-1 min-w-0 block w-full rounded-md sm:text-sm ${combinedStyles}`;

  return (
    <div className="form-field">
      <label htmlFor={name} className="block text-sm text-graycolor pl-2">
        {fieldname}
      </label>

      <div
        className={`mt-1 relative rounded-md shadow-sm group ${
          icon ? "items-center" : ""
        }`}
      >
        {mask === "currency" && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span
              className={`text-gray-100 sm:text-sm opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 ${
                value ? "opacity-100" : ""
              }`}
            >
              R$
            </span>
          </div>
        )}

        <div
          className={`flex items-center ${
            icon && iconPosition === "left" ? "pl-3" : ""
          } ${icon && iconPosition === "right" ? "" : ""} 
           bg-opacity-100  text-textlight focus:ring-maincolor focus:border-maincolor block w-full min-w-0 rounded-md sm:text-sm border-gray-300`}
        >
          {icon && iconPosition === "left" && (
            <span className="inline-flex items-center pr-2 text-gray-300">
              {icon}
            </span>
          )}

          {mask ? (
            <IMaskInput
            {...register}
              {...maskConfig}
              type={type}
              name={name}
              id={id}
              className={`${inputClasses} ${
                icon ? "rounded-none" : "rounded-md"
              } ${
                icon && iconPosition === "right"
                  ? "rounded-l-md"
                  : "rounded-r-md"
              } 
              ${
                mask === "currency"
                  ? "tracking-wide group-focus-within:pl-8" +
                    (value ? " pl-8" : "")
                  : ""
              }
            `}
              value={value}
              placeholder={placeholder}
              onChange={onChange}
              onAccept={(value) => handleIMaskChange(value)}
            />
          ) : (
            <input
              {...register}
              type={type}
              name={name}
              fieldname={fieldname}
              id={id}
              className={` ${inputClasses}
              icon ? "rounded-none" : "rounded-md"
            } ${
              icon && iconPosition === "right" ? "rounded-l-md" : "rounded-r-md"
            }`}
              defaultValue={defaultValue}
              onClick={onClick}
              onChange={onChange}
              value={value}
              placeholder={placeholder}
            />
          )}

          {mask === "metragem" && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className={`text-gray-100 sm:text-sm opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 ${
                value ? "opacity-100" : ""
              }`} >
                m²
              </span>
            </div>
          )}

          {mask === "edit" && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-100 sm:text-sm">
                <FiEdit3 className=" text-gray-200" />
              </span>
            </div>
          )}

          {icon && iconPosition === "right" && (
            <span className="inline-flex items-center px-4 text-gray-100">
              {icon}
            </span>
          )}

          {copyEnabled === "true" && (
            <FiCopy
              className="ml-2 w-4 h-4 text-maincolor cursor-pointer"
              onClick={() => copyToClipboard(name)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
