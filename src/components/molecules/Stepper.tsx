import { Container, Div, StepperCircle, StepperLine, Typo } from '@/atoms';
import { Profile } from '@/constants';

const StepperDivBaseStyle = 'grid grid-cols-[1fr_100px] items-center gap-y-4';
const StepperTextBaseStyle = 'col-start-1 col-end-2 row-start-1 row-end-2 text-right text-lg';
export default function Stepper() {
  const { StepperText } = Profile;
  return (
    <Container
      className="ml-auto flex animate-[fadeInRight_ease_0.5s_0.3s_forwards] flex-col gap-y-2 border-0 md:gap-y-4"
      type="profile"
    >
      {StepperText.map((text, index) => {
        if (index === StepperText.length - 1)
          return (
            <Div key={text} className={StepperDivBaseStyle}>
              <StepperCircle />
              <Typo className={StepperTextBaseStyle}>{text}</Typo>
            </Div>
          );
        return (
          <Div key={text} className={`${StepperDivBaseStyle} grid-rows-[1.5fr_0.7fr] md:grid-rows-[1fr_0.5fr]`}>
            <StepperCircle />
            <Typo className={StepperTextBaseStyle}>{text}</Typo>
            <StepperLine />
          </Div>
        );
      })}
    </Container>
  );
}
