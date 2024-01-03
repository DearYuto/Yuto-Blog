type TabContentProps = {
  children: React.ReactNode;
};

export default function Content({ children }: TabContentProps) {
  return <div>{children}</div>;
}
