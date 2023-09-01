const style: React.CSSProperties = {
  border: "var(--gap-sm) solid var(--color-2)",
  borderRightColor: "var(--color-4)",
  width: "var(--gap-base)",
  height: "var(--gap-base)",
  borderRadius: "50%",
  animation: "spin 1s infinite",
};

const Loading = () => {
  return (
    <div style={style}>
      <style>
        {`
          @keyframes spin {
            to {
              transform: rotate(360deg)
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
