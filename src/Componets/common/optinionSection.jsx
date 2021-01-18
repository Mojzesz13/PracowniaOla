import React from 'react';
import './optinionSection.scss';
import ButtonAboutUs from './buttonAboutUs';

const OptinionSection = ({
  addClass,
  handlerShowInfo,
  handlerShowInfo2,
  handlerShowInfo3,
  showOptinion,
  showOptinion2,
  showOptinion3,
}) => {
  const customers = [
    {
      name: '- Katarzyna',
      opinion: `Dziewczyny, jeśli szukacie magicznej wróżki, która wyczaruje dla Was suknię niczym wróżka z kopciuszka, to właśnie ją znalazłyście. Pani Ola to kobieta z pasją, niesamowitą energią, wyczuciem, gustem i ogromną sympatią dla rozkapryszonych przyszłych pań młodych. Mimo mojej bujnej wyobraźni, przez moment nie poczułam się źle. Pani Aleksandra spełnia wszystkie marzenia. Z całego serca DZIĘKUJĘ!!!!! I gorąco POLECAM!!!!!!!!`,
      state: showOptinion,
      handler: handlerShowInfo,
    },
    {
      name: '- Basia',
      opinion:
        '  Pracownia Pani Oli to 10/10! Pomimo tego, że nie noszę najmniejszego rozmiaru, to w tej sukience czułam się najpiękniejsza na świecie - dopasowana do mojej figury, a zarazem ukrywająca jej mankamenty. Wyszło lepiej, niż sobie wyobrażałam. Każda panna młoda na pewno znajdzie tam coś dla siebie.',
      state: showOptinion2,
      handler: handlerShowInfo2,
    },
    {
      name: '- Zuzanna',
      opinion:
        'Salon poleciła mi moja dobra koleżanka. Jej suknia wyglądała przepięknie i też zapragnęłam taką mieć. Zarówno podczas pierwszej wizyty, jak i późniejszych przymiarek panie były baaardzo miłe, wyrozumiałe i pomocne. Moja suknia już wisi na wieszaku, a ja nie mogę się doczekać tego jedynego wyjątkowego dnia.',
      state: showOptinion3,
      handler: handlerShowInfo3,
    },
  ];

  return (
    <>
      {customers.map((obj) => {
        return (
          <div
            key={obj.name}
            className={addClass('optinion', ' animationContainer', obj.state)}
          >
            <div className="visablePart">{obj.opinion}</div>
            <div className="hidder" onClick={obj.handler}>
              <ButtonAboutUs addClass={addClass} showOptinion={obj.state} />
              <div className="customerName">{obj.name}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default OptinionSection;
