import React, {memo, useEffect} from "react";
import Spinner from '../components/Spinner';
import Table from '../components/Table';

import ErrorView from '../components/ErrorView';
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../slices/DepartmentSlice";

const Department = memo(() => {
    const {data, loading, error} = useSelector((state) => state.DepartmentSlice);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getList());
    }, [dispatch]);

    return (
        <div>
            <Spinner loading={loading} />
            {error ? (
                <ErrorView error={error}/>
            ) : (
                <Table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>dname</th>
                            <th>loc</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((v, i) => (
                            <tr key={i}>
                                <td>{v.id}</td>
                                <td>{v.dname}</td>
                                <td>{v.loc}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    )
})

export default Department;