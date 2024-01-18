import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { container } from './markdown.css';

type Props = {
  children: string;
};

export default function MarkdownViewer({ children }: Props) {
  return (
    <article>
      <Markdown
        className={container}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')!;
            return match ? (
              <div style={{ color: '#fff' }}>
                <SyntaxHighlighter
                  PreTag='div'
                  style={atomDark}
                  language={'tsx'}
                >
                  {String(children)}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code {...props}>{children}</code>
            );
          },
        }}
      >
        {children}
      </Markdown>
    </article>
  );
}
