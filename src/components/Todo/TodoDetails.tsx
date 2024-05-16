import { useNavigate, useLocation } from "react-router";

export default function TodoDetails() {
    const navigate = useNavigate();
    const location = useLocation();
    const todo = location.state.todo;

    
    const getPriorityBadge = (priority) => {
        switch (priority) {
            case 'P1':
                return <span className="badge bg-danger">P1</span>;
            case 'P2':
                return <span className="badge bg-warning">P2</span>;
            case 'P3':
                return <span className="badge bg-primary">P3</span>;
            case 'P4':
                return <span className="badge bg-success">P4</span>;
            default:
                return <span className="badge bg-secondary">No Priority</span>;
        }
    };

    return (
        <>
            <div className="about d-flex align-items-center justify-content-center">
                <div className="row">
                    <div className="col">
                        <h2 className="text-center">Todo Detail</h2>
                        <br />
                        <p>ID: {todo.id}</p>
                        <p>Todo Title: {todo.title}</p>
                        <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
                        <p>Priority: {getPriorityBadge(todo.priority)}</p>
                        <button className="btn btn-dark" onClick={() => navigate(-1)}>Back</button>
                        <br />
                    </div>
                </div>
            </div>
        </>
    );
}
