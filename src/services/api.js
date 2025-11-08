const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "https://jsonplaceholder.typicode.com";

class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    this.name = "ApiError";
  }
}

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorText = await response.text().catch(() => "Unknown error");
    throw new ApiError(
      `HTTP ${response.status}: ${errorText}`,
      response.status
    );
  }
  return response.json();
};

export const API = {
  async getUsers() {
    try {
      const response = await fetch(`${API_BASE_URL}/users`);
      return await handleResponse(response);
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  },

  async getUser(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${id}`);
      return await handleResponse(response);
    } catch (error) {
      console.error(`Error fetching user ${id}:`, error);
      throw error;
    }
  },

  async getPosts() {
    try {
      const response = await fetch(`${API_BASE_URL}/posts`);
      return await handleResponse(response);
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  },

  async getPost(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/posts/${id}`);
      return await handleResponse(response);
    } catch (error) {
      console.error(`Error fetching post ${id}:`, error);
      throw error;
    }
  },
};
