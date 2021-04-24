function InformationTable({ info }) {
    return (
        <table className='informationTable'>
            <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Phone</th>
                </tr>
                {info.map((data, i) =>
                    <tr key={i} className="data-parent">
                        <td className="data">{data.name}</td>
                        <td className="data">{data.lastName}</td>
                        <td className="data">{data.ph}</td>
                    </tr>
                )}
            </thead>
        </table>
    );
}
export default InformationTable;