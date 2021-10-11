type DefaultTemplateProps = {
  children: React.ReactNode;
};

export default function DefaultTemplate({ children }: DefaultTemplateProps) {
  return <>{children}</>;
}
