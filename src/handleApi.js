async function getTodos(setTasksList) {
  try {
    const res = await fetch("http://localhost:5000");
    const todos = await res.json();
    if (todos) {
      setTasksList(todos);
    }
  } catch (error) {
    console.log(error); // Store any error in state
  }
}

async function addToDo(newTask) {
  try {
    const response = await fetch("http://localhost:5000/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log(":Added succesfulluy ", result);
  } catch (error) {
    console.log(error);
  } finally {
    //  setLoading(false); // Set loading to false after the request
  }
}

async function changeStatus(taskStatus) {
  try {
    const response = await fetch("http://localhost:5000/updateStatus", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskStatus),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log(":Updates succesfulluy ", result);
  } catch (error) {
    console.log(error);
  } finally {
    //  setLoading(false); // Set loading to false after the request
  }
}
async function changeTask(taskStatus) {
  try {
    const response = await fetch("http://localhost:5000/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskStatus),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log(":Updates succesfulluy ", result);
  } catch (error) {
    console.log(error);
  } finally {
    //  setLoading(false); // Set loading to false after the request
  }
}

export { getTodos, addToDo, changeStatus, changeTask };
