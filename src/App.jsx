import Heading from './components/Heading';
import Section from './components/Section';
import "./App.css"


export default function Page() {
  return (
    <div className='main'>

    <Section>
      <Heading level={1}>1</Heading>
      <Section>
        <Heading level={1}>1</Heading>
        <Heading level={2}>2</Heading>
        <Heading level={2}>2</Heading>
        <Section>
          <Heading level={1}>1</Heading>
          <Heading level={3}>3</Heading>
          <Heading level={3}>3</Heading>
          <Section>
            <Heading level={1}>1</Heading>
            <Heading level={4}>4</Heading>
            <Heading level={4}>4</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
    </div>
  );
}
