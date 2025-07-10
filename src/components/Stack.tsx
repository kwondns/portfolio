import BentoGrid from '@/components/BentoGrid';
import BentoCard from '@/components/BentoCard';
import SkillProficiency from '@/components/SkillProficiency';
import Typography from '@/components/Typography';
import { Fragment } from 'react';
import STACK from '@/constants/stack';
import DynamicIcon from '@/components/DynamicIcon';
import { IconKey } from '@/constants/Icons';

const SkillWithPercentage = ({ icon, skill, percentage }: { icon: IconKey; skill: string; percentage: number }) => {
  return (
    <div className="flex justify-between items-center">
      <Typography color="info" className="flex items-center gap-2">
        <DynamicIcon name={icon} />
        {skill}
      </Typography>
      <span className="text-sm text-primary">{percentage}%</span>
    </div>
  );
};

export default function Stack() {
  return (
    <section className="my-24 mx-12">
      <BentoGrid>
        {Object.entries(STACK).map(([key, value]) => (
          <BentoCard key={key}>
            <span className="text-2xl text-text">{key}</span>
            {value.map(({ skill, percentage, icon }) => (
              <Fragment key={`${skill}_${percentage}`}>
                <SkillWithPercentage icon={icon} skill={skill} percentage={percentage} />
                <SkillProficiency value={percentage} />
              </Fragment>
            ))}
          </BentoCard>
        ))}
      </BentoGrid>
    </section>
  );
}
