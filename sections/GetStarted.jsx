import styles from '../styles';
import { startingFeatures } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';


const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto`}
    >
      <div
        className="flex-[0.75] flex justify-center flex-col "
      >
        <TypingText title="| Как работает WeCode.uz" />
        <TitleText title={<>Начните всего несколькими кликами.</>} />
        <div className="mx-auto flex lg:flex-row flex-col gap-8 flex-wrap mt-[50px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default GetStarted;
