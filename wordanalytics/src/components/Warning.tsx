type WarningProps = {
  warningText: string;
};

export default function WarningMessage({ warningText }: WarningProps) {
  return <p className="warning">{warningText}</p>;
}
