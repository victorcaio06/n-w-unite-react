export function AttendeeList() {
  return (
    <div className="flex items-center gap-3">
      <h1 className="text-2xl font-bold">Participantes</h1>
      <input
        className="px-3 py-1.5 border border-white/10 bg-transparent rounded-lg text-sm"
        type="text"
        placeholder="Buscar participantes..."
      />
    </div>
  );
}
