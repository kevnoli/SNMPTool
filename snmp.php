<?php
snmp_set_quick_print(1);
$session = new SNMP(SNMP::VERSION_2c, "201.30.47.4", "public");
$ifSpeed = $session->get("1.3.6.1.2.1.2.2.1.5.1");

$delta_in = $session->get("1.3.6.1.2.1.2.2.1.10.1");
sleep(1);
$delta_in = $session->get("1.3.6.1.2.1.2.2.1.10.1") - $delta_in;
$in_bw = $delta_in * 8 * 100/$ifSpeed;

$delta_out = $session->get("1.3.6.1.2.1.2.2.1.10.1");
sleep(1);
$delta_out = $session->get("1.3.6.1.2.1.2.2.1.10.1") - $delta_out;
$out_bw = $delta_out * 8 * 100/$ifSpeed;

echo json_encode(array("down" => $in_bw,"up" => $out_bw));
?>