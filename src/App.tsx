import { AttendeList, Header } from './components'

export function App() {
    return (
        <div className="max-w-[1246px] mx-auto py-5 flex flex-col gap-5">
            <Header />
            <AttendeList />
        </div>
    )
}
