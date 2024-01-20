import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { blockquote, code, container, hr } from './markdown.css';
import Text from '@/components/atoms/text/Text';

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
          h1({ children }) {
            return (
              <Text
                style={{ margin: '10px 0' }}
                weight='bold'
                size='2xl'
                color='primary'
                as='h1'
              >
                {children}
              </Text>
            );
          },

          h2({ children }) {
            return (
              <Text
                style={{ margin: '10px 0' }}
                weight='bold'
                size='xl'
                color='gray700'
                as='h2'
              >
                {children}
              </Text>
            );
          },

          h3({ children }) {
            return (
              <Text
                style={{ margin: '10px 0' }}
                weight='bold'
                size='xl'
                color='gray700'
                as='h3'
              >
                {children}
              </Text>
            );
          },

          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')!;
            return match ? (
              <div>
                <SyntaxHighlighter
                  PreTag='div'
                  style={atomDark}
                  language={'tsx'}
                >
                  {String(children)}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className={code}>
                <Text as='span' color='primary' size='sm' weight='bold'>
                  {children}
                </Text>
              </code>
            );
          },

          blockquote({ children }) {
            return <blockquote className={blockquote}>{children}</blockquote>;
          },

          hr() {
            return <hr className={hr} />;
          },
        }}
      >
        {children}
      </Markdown>
    </article>
  );
}
