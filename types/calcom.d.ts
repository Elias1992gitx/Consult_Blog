declare module '@calcom/embed-react' {
  export const getCalApi: () => Promise<any>
  const Cal: React.FC<any>
  export default Cal
}
