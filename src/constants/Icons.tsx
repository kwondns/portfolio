import { FaAws, FaNodeJs } from 'react-icons/fa6';
import {
  SiTerraform,
  SiReact,
  SiDocker,
  SiPostgresql,
  SiNestjs,
  SiTypescript,
  SiTypeorm,
  SiGithub,
  SiGmail,
} from 'react-icons/si';
import { RiNextjsFill, RiExternalLinkLine, RiCloseLine } from 'react-icons/ri';

export const Icons = {
  aws: FaAws,
  terraform: SiTerraform,
  react: SiReact,
  docker: SiDocker,
  reactNative: SiReact,
  nest: SiNestjs,
  postgres: SiPostgresql,
  next: RiNextjsFill,
  nodejs: FaNodeJs,
  typescript: SiTypescript,
  typeorm: SiTypeorm,
  github: SiGithub,
  mail: SiGmail,
  externalLink: RiExternalLinkLine,
  close: RiCloseLine,
} as const;

export type IconKey = keyof typeof Icons;
