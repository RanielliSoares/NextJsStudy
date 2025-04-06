
export const metadata = {
    title: "Painel do Site",
    description: "Painel de vendas"
}

export default function DashboardLayout9({
    children
}:{children: React.ReactNode}){
    return(
        <>
            <h3>Header Dashboard</h3>
            {children}
        </>
    )
}