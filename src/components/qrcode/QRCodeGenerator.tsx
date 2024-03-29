import QRCode from "react-qr-code";

interface QRCodeGeneratorProps {
  value: string;
}

export default function QRCodeGenerator({ value }: QRCodeGeneratorProps) {
  return (
    <div
      style={{
        height: "auto",
        // margin: "0 auto",
        maxWidth: 300,
        width: "100%",
      }}
    >
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={value}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};
