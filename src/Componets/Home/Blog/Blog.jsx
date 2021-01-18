import React from 'react';
import './Blog.scss';
import { v4 as uuidv4 } from 'uuid';
import DecorationBar from '../../common/decorationBar';
import Footer from '../Footer/Footer';

const blogDataBase = [
  {
    question: 'Czy muszę umawiać się na wizytę? ',
    answer:
      'Tak, bardzo prosimy umawiać się wcześniej telefonicznie. Dzięki temu jesteśmy przygotowane na Twoje przyjście i mamy wtedy czas tylko dla Ciebie.',
  },
  {
    question: 'Ile trwa spotkanie? ',
    answer: 'W zależności od potrzeb spotkanie trwa około godziny do półtorej.',
  },
  {
    question: 'Czy mogę przyjść z osobą towarzyszącą? ',
    answer:
      'Jak najbardziej! Może to być przyjaciółka, mama, siostra lub Twój przyszły mąż. Niech to będzie osoba, która jest dla Ciebie życzliwa i będzie w stanie obiektywnie ocenić, jak suknia prezentuje się na Tobie.',
  },
  {
    question: 'Jak przygotować się do wizyty w pracowni? ',
    answer:
      'Przede wszystkim zabierz ze sobą dobre nastawienie! Zbierz również inspiracje - zdjęcia sukni, które Ci się podobają. Określ budżet, jaki chciałabyś przeznaczyć na zakup sukni. Najważniejsze - zabierz ze sobą buty na obcasie (jeśli w takich będziesz szła do ślubu) oraz dobrze dopasowany biustonosz.',
  },
  {
    question: 'Mam własny pomysł na suknię! ',
    answer:
      'Świetnie! Bardzo chętnie go zrealizujemy! Najpierw omówimy projekt i wykonamy go dla Ciebie.',
  },
  {
    question: 'Nie wiem, jakiej sukni szukam... ',
    answer:
      'Nie martw się! Chętnie Ci doradzimy, będziesz mogła przymierzyć kilka różnych modeli, zobaczyć, jak w nich wyglądasz, a w końcu wybrać ten idealny.',
  },
  {
    question: 'Czy jest możliwość uszycia sukni ślubnej plus size?',
    answer:
      'Oczywiście! Mamy duże doświadczenie w szyciu sukien plus size. Taka suknia ślubna będzie dopasowana do Twoich wymiarów - ukryje mankamenty figury i podkreśli jej atuty.  ',
  },
  {
    question: 'Ile czasu zajmuje uszycie sukni ślubnej? ',
    answer:
      'Tak naprawdę jesteśmy w stanie uszyć suknie nawet w tydzień, jeśli znajdziesz się w takiej potrzebie. Zalecamy jednak umawiać się na przymiarki z rocznym wyprzedzeniem, aby na spokojnie zrealizować wymarzony projekt. Oferujemy również ekspresowe usługi, wtedy suknie powstają w mgnieniu oka ;)   ',
  },
  {
    question: 'Czy przy zamówieniu trzeba wpłacać zaliczkę? ',
    answer: 'Tak. W dniu zamówienia i podpisania umowy wpłacana jest zaliczka.',
  },
  {
    question: 'Co w razie gdy przytyję lub schudnę? ',
    answer:
      'Nie ma problemu! 2 tygodnie przed ślubem ostatecznie dopasowujemy suknię tak, aby w dniu ślubu leżała idealnie. ',
  },
  {
    question: 'Ile jest przymiarek?',
    answer:
      'Łącznie są 4 spotkania, z tym że pierwsze to wybieranie sukni. Samych przymiarek jest 3, a na tej ostatniej jest już wydawana suknia.  ',
  },
  {
    question: 'Czy uszytą suknię można oddać do komisu? ',
    answer:
      'Jak najbardziej. Jeśli z jakiegoś powodu nie chcesz zatrzymać sukni, możesz oddać ją do nas do komisu i podarować jej drugie życie.',
  },
  {
    question: 'Ile kosztuje uszycie sukni ślubnej?',
    answer:
      'Cena uzależniona jest od wybranego fasonu, materiału, ilości zdobień, rodzaju koronki. Suknię możemy uszyć już za 1500zł, a górnej granicy nie ma - wszystko zależy od Twojej wyobraźni.',
  },
  {
    question: 'Jakie są zalety szycia sukni ślubnej?',
    answer:
      'Jedną z zalet szycia sukni ślubnej na miarę jest niższa cena niż ta oferowana w salonach. Mamy też możliwość dopasowania sukni do figury klientki, a także wprowadzania modyfikacji projektu podczas przymiarek. Sama decydujesz z jakiego materiału i koronki wykonana jest Twoja suknia, a do tego masz pewność że jest absolutnie wyjątkowa.',
  },
];

const Blog = () => {
  const dataBase = blogDataBase.map(function (obj, index) {
    return (
      <li key={uuidv4()} className="blogList">
        <div className="decorationBar" />
        <p>{obj.question}</p>
        <p>{obj.answer}</p>
      </li>
    );
  });

  return (
    <div className="blogContainer" id="blog">
      <DecorationBar title={'Blog'} />
      <ul className="questionList">{dataBase}</ul>
      <Footer />
    </div>
  );
};

export default Blog;
