import * as C from "./styles";

import minoxi from "../../assets/products/minoxi.png";
import boxminoxi from "../../assets/products/boxminoxi.png";

export function Shop() {
  return (
    <C.Container>
      <div>
        <C.AreaTitleSection>
          <p>
            Produtos para o<span> cabelo</span>
          </p>
        </C.AreaTitleSection>
        <C.AreaCardsShop>
          <C.CardProduct>
            <C.ContentCardProduct>
              <img src={minoxi} alt="" />
              <span>Minoxidil kirkland</span>
              <p>R$ 20,00</p>
            </C.ContentCardProduct>
          </C.CardProduct>
          <C.CardProduct>
            <C.ContentCardProduct>
              <img src={boxminoxi} alt="" />
              <span>Loção pós barba </span>
              <p>R$ 25,00</p>
            </C.ContentCardProduct>
          </C.CardProduct>
          <C.CardProduct>
            <C.ContentCardProduct>
              <img src={boxminoxi} alt="" />
              <span>Loção pós barba </span>
              <p>R$ 25,00</p>
            </C.ContentCardProduct>
          </C.CardProduct>
          <C.CardProduct>
            <C.ContentCardProduct>
              <img src={boxminoxi} alt="" />
              <span>Loção pós barba </span>
              <p>R$ 25,00</p>
            </C.ContentCardProduct>
          </C.CardProduct>
        </C.AreaCardsShop>
      </div>

      <div>
        <C.AreaTitleSection>
          <p>
            Produtos para a<span> barba</span>
          </p>
        </C.AreaTitleSection>
        <C.AreaCardsShop>
          <C.CardProduct>
            <C.ContentCardProduct>
              <img src={minoxi} alt="" />
              <span>Minoxidil kirkland</span>
              <p>R$ 20,00</p>
            </C.ContentCardProduct>
          </C.CardProduct>
          <C.CardProduct>
            <C.ContentCardProduct>
              <img src={boxminoxi} alt="" />
              <span>Loção pós barba </span>
              <p>R$ 25,00</p>
            </C.ContentCardProduct>
          </C.CardProduct>
          <C.CardProduct>
            <C.ContentCardProduct>
              <img src={boxminoxi} alt="" />
              <span>Loção pós barba </span>
              <p>R$ 25,00</p>
            </C.ContentCardProduct>
          </C.CardProduct>
          <C.CardProduct>
            <C.ContentCardProduct>
              <img src={boxminoxi} alt="" />
              <span>Loção pós barba </span>
              <p>R$ 25,00</p>
            </C.ContentCardProduct>
          </C.CardProduct>
        </C.AreaCardsShop>
      </div>
    </C.Container>
  );
}
