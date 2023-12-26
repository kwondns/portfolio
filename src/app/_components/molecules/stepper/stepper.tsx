import StepperCircle from '@/components/atoms/stepperCircle/stepperCircle';
import StepperLine from '@/components/atoms/stepperLine/stepperLine';
import { stepperCss, stepperLine, stepperTextCss } from '@/components/molecules/stepper/stepper.css';
import Container from '@/components/atoms/base/container';

type StepperProps = {
  texts: string[];
};
export default function Stepper(props: StepperProps) {
  const { texts } = props;
  return (
    <Container className={stepperCss}>
      {texts.map((text, index) => {
        return (
          <Container className={stepperLine}>
            <StepperCircle />
            <p className={stepperTextCss}>{text}</p>
            {index !== texts.length - 1 && <StepperLine />}
          </Container>
        );
      })}
    </Container>
  );
}
