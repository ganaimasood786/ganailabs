export default function Logo({ light = false }) {
  return (
    <span className={`logo ${light ? 'light' : ''}`}>
      <img src="/favicon.svg" alt="" width="36" height="36" />
      <span>Ganai<b>Labs</b></span>
    </span>
  );
}
