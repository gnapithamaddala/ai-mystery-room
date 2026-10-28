const BASE = '/api';
export async function request(path, options = {}) {
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
  let token=localStorage.getItem('mystery-session-token');
  if(!token){const sessionResponse=await fetch(`${BASE}/session`,{method:'POST'});const sessionData=await sessionResponse.json();if(!sessionResponse.ok)throw new Error('Could not start an investigation session.');token=sessionData.token;localStorage.setItem('mystery-session-token',token);}
  headers.Authorization=`Bearer ${token}`;
  const response = await fetch(`${BASE}${path}`, { ...options, headers });
  const data = await response.json();
  if (!response.ok) throw new Error(data?.error?.message || 'Something went wrong. Please try again.');
  return data;
}
export const api = {
  create: (body) => request('/mysteries', { method: 'POST', body: JSON.stringify(body) }),
  get: (id) => request(`/mysteries/${id}`),
  progress: (id) => request(`/mysteries/${id}/progress`),
  saveProgress: (id, body) => request(`/mysteries/${id}/progress`, { method: 'PATCH', body: JSON.stringify(body) }),
  hint: (id, level) => request(`/mysteries/${id}/hints`, { method: 'POST', body: JSON.stringify({ level }) }),
  accuse: (id, suspectId) => request(`/mysteries/${id}/accusation`, { method: 'POST', body: JSON.stringify({ suspectId }) }),
  accuseDemo: (suspectId) => request('/demo/accusation', { method: 'POST', body: JSON.stringify({ suspectId }) }),
  history: () => request('/mysteries')
};
