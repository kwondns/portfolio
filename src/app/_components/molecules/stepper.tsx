import StepperCircle from '@/components/atoms/stepperCircle';
import StepperLine from '@/components/atoms/stepperLine';
import { stepperCss, stepperLine, stepperTextCss } from '@/components/molecules/stepper.css';

type StepperProps = {
  texts: string[];
};
export default function Stepper({ texts }: StepperProps) {
  return (
    <div className={stepperCss}>
      {texts.map((text, index) => {
        return (
          <div className={stepperLine}>
            <StepperCircle />
            <p className={stepperTextCss}>{text}</p>
            {index !== texts.length - 1 && <StepperLine />}
          </div>
        );
      })}
    </div>
  );
}
