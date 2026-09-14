interface GraphNode {
  x: number;
  y: number;
  r: number;
  accent?: boolean;
}

const nodes: GraphNode[] = [
  { x: 60, y: 80, r: 4 },
  { x: 150, y: 40, r: 3 },
  { x: 230, y: 100, r: 5 },
  { x: 330, y: 60, r: 3 },
  { x: 380, y: 150, r: 4 },
  { x: 120, y: 180, r: 3 },
  { x: 260, y: 210, r: 6, accent: true },
  { x: 60, y: 260, r: 4 },
  { x: 180, y: 300, r: 3 },
  { x: 320, y: 290, r: 4 },
  { x: 400, y: 340, r: 3 },
  { x: 220, y: 380, r: 4 },
  { x: 90, y: 360, r: 3 },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [2, 6],
  [1, 5],
  [5, 6],
  [5, 7],
  [6, 9],
  [4, 9],
  [7, 8],
  [8, 6],
  [8, 11],
  [9, 10],
  [9, 11],
  [11, 12],
  [7, 12],
];

export function HeroGraphic() {
  const accentNode = nodes.find((node) => node.accent);

  return (
    <svg
      viewBox="0 0 440 440"
      role="img"
      aria-label="Abstract diagram of a protected network, with connected nodes and one node highlighted as a monitored asset"
      className="h-full w-full"
    >
      {edges.map(([from, to]) => {
        const a = nodes[from];
        const b = nodes[to];
        return (
          <line
            key={`${from}-${to}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="var(--color-line)"
            strokeWidth={1}
            strokeOpacity={0.55}
          />
        );
      })}

      {nodes.map((node, index) =>
        node.accent ? null : (
          <circle
            key={index}
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill="var(--color-line)"
          />
        ),
      )}

      {accentNode ? (
        <g>
          <circle
            cx={accentNode.x}
            cy={accentNode.y}
            r={accentNode.r + 6}
            fill="none"
            stroke="var(--color-accent)"
            strokeOpacity={0.5}
            className="origin-center animate-ping"
            style={{ transformBox: "fill-box", animationDuration: "2.6s" }}
          />
          <circle cx={accentNode.x} cy={accentNode.y} r={accentNode.r} fill="var(--color-accent)" />
        </g>
      ) : null}
    </svg>
  );
}
