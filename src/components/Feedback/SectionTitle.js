import { TitleSection } from "./SectionTitle.styled";
export const SectionTitle = ({ title, children }) => (
  <section>
    <TitleSection>{title}</TitleSection>
    {children}
  </section>
);