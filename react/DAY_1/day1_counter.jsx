export default function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Rendered:", count);
    }, [count]);
    return (
        <div className="p-4">
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(c => c + 1)}>+</button>
            <button onClick={() => setCount(c => c - 1)}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}
