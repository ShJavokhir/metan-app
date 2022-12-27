import React, {useEffect, useState} from 'react';
import {TableWrapper} from "./Table.style";
import {Button, Chip, IconButton} from "@mui/material";
import Modal from "react-modal";
import {ModalContent, ModalHeader} from "../../Kassirlar/CashierTable/CashierTable.style";
import CloseSvg from "../../../../Common/Svgs/CloseSvg";
import ButtonLoader from "../../../../Common/ButtonLoader";
import EditIcon from "@mui/icons-material/Edit";
import MinLoader from "../../../../Common/MinLoader";
import {useForm} from "react-hook-form";
import {useContextSelector} from "use-context-selector";
import GlobalContext from "../../../../../Context/GlobalContext/Context";
import {useRouter} from "next/router";
import CashbackProvider from "../../../../../Data/Providers/CashbackProvider";
import Message from "../../../../../utils/Message";
import ProjectsProvider from "../../../../../Data/Providers/ProjectsProvider";



const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        minHeight: 200,
        width: 600,
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 8,
        padding: 0,
        overlay: {
            background: "red",
        },
    },
};

Modal.setAppElement("#__next");


const TablePage = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue,
        reset,
        control,
    } = useForm({
        defaultValues: {},
    });

    const cash_edit = useContextSelector(
        GlobalContext,
        (state) => state.keshbek_edit
    );

    const router = useRouter();
    const [modalIsOpen, setIsModalOpen] = React.useState(false);
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [forRender, setForRender] = useState(null);
    const [cashback, setCashback] = useState([]);

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
        setValue("title", "");
    }

    useEffect(() => {
        setLoading2(true);
        ProjectsProvider.getAllProjects()
            .then((res) => {
                console.log(res.data);
                setCashback(res.data.data);
            })
            .catch((err) => {
                console.log(err);
                Message.serverError();
            })
            .finally(() => {
                setLoading2(false);
            });
    }, [forRender]);

    const onSubmit = async (values) => {
        const body = {};
        body.title = values.title;

        setLoading(true);
        try {
            const { data } = await ProjectsProvider.addProject(body);
            setForRender(Math.random());
            closeModal();
        } catch (err) {
            console.log(err);
            Message.serverError();
        }
        setLoading(false);
    };

    const handleEditCash = (cashId) => {
        cash_edit(cashId);
        router.push("/dashboard/editCashback");
    };

    return (
        <TableWrapper>
            <div className="top">
                <h3 className="title">Proyektlar</h3>
                <div className="modal-wrapper">
                    <Button
                        variant="contained"
                        onClick={openModal}
                        style={{
                            fontFamily: "Inter",
                            color: "#fff",
                            background: "#787EFF",
                        }}
                    >
                        + Qo'shish
                    </Button>
                    {/*====MODAL====*/}
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                    >
                        <ModalHeader className="modal-header">
                            <h2 className="title">Qo'shish</h2>
                            <button className="closeSvg" onClick={closeModal}>
                                <CloseSvg />
                            </button>
                        </ModalHeader>
                        <ModalContent>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label className="label">
                                    <span className="label-text">Proyekt nomi</span>
                                    {errors.title && (
                                        <span className="err-text">Majburiy maydon</span>
                                    )}
                                    <input
                                        autoComplete="off"
                                        type="text"
                                        {...register("title", { required: true })}
                                    />
                                </label>
                                <div className="btns">
                                    <button
                                        type="button"
                                        className="btn btn-outline-warning"
                                        onClick={closeModal}
                                    >
                                        Bekor qilish
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={loading}
                                    >
                                        Qo'shish {loading && <ButtonLoader />}
                                    </button>
                                </div>
                            </form>
                        </ModalContent>
                    </Modal>
                </div>
            </div>
            <table className="table table-borderless table-hover">
                <thead>
                <tr>
                    <th style={{ minWidth: "90%" }} className="col">
                        Nomi
                    </th>
                    <th style={{ minWidth: "10%" }} className="col">
                        Amallar
                    </th>
                </tr>
                </thead>
                <tbody>
                {!loading2 ? (
                    cashback.length ? (
                        cashback.map((obj, index) => (
                            <tr key={obj.id}>
                                <td style={{ minWidth: "90%" }} className="col">
                                    {obj.title}
                                </td>
                                <td style={{ minWidth: "10%" }} className="col">
                                    <div className="btns">
                                        <IconButton
                                            style={{ background: "rgb(253, 181, 40, 0.12)" }}
                                            // onClick={() => handleEditCash(obj.id)}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <div
                            style={{
                                textAlign: "center",
                                padding: 30,
                            }}
                        >
                            <h3 style={{ color: "rgba(0, 0, 0, 0.7)" }}>
                                Proyektlar mavjud emas
                            </h3>
                        </div>
                    )
                ) : (
                    <MinLoader />
                )}
                </tbody>
            </table>
        </TableWrapper>
    );
};

export default TablePage;