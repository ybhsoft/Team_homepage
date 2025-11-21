import { GithubRepo } from '../types';

export const fetchRepositories = async (username: string): Promise<GithubRepo[]> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    const data = await response.json();
    return data as GithubRepo[];
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    // Return empty array to allow UI to handle empty state gracefully
    return [];
  }
};