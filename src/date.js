export default function date() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const localDate = date.toLocaleDateString();
  const localTime = date.toLocaleTimeString();
  return {
    hours,
    minutes,
    seconds,
    localDate,
    localTime
  };
}
