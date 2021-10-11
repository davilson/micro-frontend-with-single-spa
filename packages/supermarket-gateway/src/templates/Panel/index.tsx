import { Wrapper } from "./style";

type PanelTemplateProps = {
  children: React.ReactNode;
};

export default function PanelTemplate({ children }: PanelTemplateProps) {
  return (
    <Wrapper>
      <div>logo área</div>
      <div>{children}</div>
    </Wrapper>
  );
}
