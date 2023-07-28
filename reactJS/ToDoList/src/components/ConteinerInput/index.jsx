import { Conteiner } from "./style.js";

import {FaPlus} from 'react-icons/fa'

import './styles.css'

export const ConteinerInput = () => {
  return (
    <Conteiner>
      <input class="input" name="text" type="text" placeholder="Adicione suas tarefas"/>

      <button onClick={ola}>
        <span class="shadow"></span>
        <span class="edge"></span>
        <span class="front text">
            <FaPlus />
        </span>
      </button>
    </Conteiner>
  );
};
