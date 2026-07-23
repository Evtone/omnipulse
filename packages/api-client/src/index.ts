export const apiClient = {
  getHealth: async () => {
    const response = await fetch('/api/health');
    return response.json();
  },
};
