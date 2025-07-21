export default function Modal({ children }) {
  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-background p-6 rounded shadow-lg relative">
        {children}
      </div>
    </div>
  );
}
